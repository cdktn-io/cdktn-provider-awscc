# `dataAwsccBedrockagentcoreHarness` Submodule <a name="`dataAwsccBedrockagentcoreHarness` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreHarness <a name="DataAwsccBedrockagentcoreHarness" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_harness awscc_bedrockagentcore_harness}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_harness#id DataAwsccBedrockagentcoreHarness#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarness resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarness resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreHarness to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreHarness that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreHarness to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.allowedTools">allowed_tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentArtifact">environment_artifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessId">harness_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessName">harness_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxIterations">max_iterations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.memory">memory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference">DataAwsccBedrockagentcoreHarnessMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.model">model</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference">DataAwsccBedrockagentcoreHarnessModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList">DataAwsccBedrockagentcoreHarnessSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.systemPrompt">system_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList">DataAwsccBedrockagentcoreHarnessSystemPromptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList">DataAwsccBedrockagentcoreHarnessTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList">DataAwsccBedrockagentcoreHarnessToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.truncation">truncation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allowed_tools`<sup>Required</sup> <a name="allowed_tools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.allowedTools"></a>

```python
allowed_tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorizer_configuration`<sup>Required</sup> <a name="authorizer_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.authorizerConfiguration"></a>

```python
authorizer_configuration: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environment"></a>

```python
environment: DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference</a>

---

##### `environment_artifact`<sup>Required</sup> <a name="environment_artifact" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentArtifact"></a>

```python
environment_artifact: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference</a>

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `harness_id`<sup>Required</sup> <a name="harness_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessId"></a>

```python
harness_id: str
```

- *Type:* str

---

##### `harness_name`<sup>Required</sup> <a name="harness_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessName"></a>

```python
harness_name: str
```

- *Type:* str

---

##### `max_iterations`<sup>Required</sup> <a name="max_iterations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxIterations"></a>

```python
max_iterations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.memory"></a>

```python
memory: DataAwsccBedrockagentcoreHarnessMemoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference">DataAwsccBedrockagentcoreHarnessMemoryOutputReference</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.model"></a>

```python
model: DataAwsccBedrockagentcoreHarnessModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference">DataAwsccBedrockagentcoreHarnessModelOutputReference</a>

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.skills"></a>

```python
skills: DataAwsccBedrockagentcoreHarnessSkillsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList">DataAwsccBedrockagentcoreHarnessSkillsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_prompt`<sup>Required</sup> <a name="system_prompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.systemPrompt"></a>

```python
system_prompt: DataAwsccBedrockagentcoreHarnessSystemPromptList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList">DataAwsccBedrockagentcoreHarnessSystemPromptList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tags"></a>

```python
tags: DataAwsccBedrockagentcoreHarnessTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList">DataAwsccBedrockagentcoreHarnessTagsList</a>

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tools"></a>

```python
tools: DataAwsccBedrockagentcoreHarnessToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList">DataAwsccBedrockagentcoreHarnessToolsList</a>

---

##### `truncation`<sup>Required</sup> <a name="truncation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.truncation"></a>

```python
truncation: DataAwsccBedrockagentcoreHarnessTruncationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration()
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer()
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims()
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue()
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue()
```


### DataAwsccBedrockagentcoreHarnessConfig <a name="DataAwsccBedrockagentcoreHarnessConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_harness#id DataAwsccBedrockagentcoreHarness#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreHarnessEnvironment <a name="DataAwsccBedrockagentcoreHarnessEnvironment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifact <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifact" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact()
```


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration()
```


### DataAwsccBedrockagentcoreHarnessMemory <a name="DataAwsccBedrockagentcoreHarnessMemory" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory()
```


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration()
```


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig()
```


### DataAwsccBedrockagentcoreHarnessModel <a name="DataAwsccBedrockagentcoreHarnessModel" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel()
```


### DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig()
```


### DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig()
```


### DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig()
```


### DataAwsccBedrockagentcoreHarnessSkills <a name="DataAwsccBedrockagentcoreHarnessSkills" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills()
```


### DataAwsccBedrockagentcoreHarnessSystemPrompt <a name="DataAwsccBedrockagentcoreHarnessSystemPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt()
```


### DataAwsccBedrockagentcoreHarnessTags <a name="DataAwsccBedrockagentcoreHarnessTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags()
```


### DataAwsccBedrockagentcoreHarnessTools <a name="DataAwsccBedrockagentcoreHarnessTools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools()
```


### DataAwsccBedrockagentcoreHarnessToolsConfig <a name="DataAwsccBedrockagentcoreHarnessToolsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction <a name="DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction()
```


### DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp <a name="DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp()
```


### DataAwsccBedrockagentcoreHarnessTruncation <a name="DataAwsccBedrockagentcoreHarnessTruncation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation()
```


### DataAwsccBedrockagentcoreHarnessTruncationConfig <a name="DataAwsccBedrockagentcoreHarnessTruncationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig()
```


### DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow()
```


### DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">match_value_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">match_value_string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_value_string`<sup>Required</sup> <a name="match_value_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```python
match_value_string: str
```

- *Type:* str

---

##### `match_value_string_list`<sup>Required</sup> <a name="match_value_string_list" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```python
match_value_string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claim_match_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_match_operator`<sup>Required</sup> <a name="claim_match_operator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```python
claim_match_operator: str
```

- *Type:* str

---

##### `claim_match_value`<sup>Required</sup> <a name="claim_match_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```python
claim_match_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizing_claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inbound_token_claim_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inbound_token_claim_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizing_claim_match_value`<sup>Required</sup> <a name="authorizing_claim_match_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```python
authorizing_claim_match_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `inbound_token_claim_name`<sup>Required</sup> <a name="inbound_token_claim_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```python
inbound_token_claim_name: str
```

- *Type:* str

---

##### `inbound_token_claim_value_type`<sup>Required</sup> <a name="inbound_token_claim_value_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```python
inbound_token_claim_value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">custom_claims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audience`<sup>Required</sup> <a name="allowed_audience" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_scopes`<sup>Required</sup> <a name="allowed_scopes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```python
allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_claims`<sup>Required</sup> <a name="custom_claims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```python
custom_claims: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration">DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_jwt_authorizer`<sup>Required</sup> <a name="custom_jwt_authorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration">DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage">session_storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_storage`<sup>Required</sup> <a name="session_storage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```python
session_storage: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">idle_runtime_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime">max_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_runtime_session_timeout`<sup>Required</sup> <a name="idle_runtime_session_timeout" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```python
idle_runtime_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lifetime`<sup>Required</sup> <a name="max_lifetime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```python
max_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig">network_mode_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `network_mode_config`<sup>Required</sup> <a name="network_mode_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```python
network_mode_config: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn">agent_runtime_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId">agent_runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName">agent_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations">filesystem_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_runtime_arn`<sup>Required</sup> <a name="agent_runtime_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn"></a>

```python
agent_runtime_arn: str
```

- *Type:* str

---

##### `agent_runtime_id`<sup>Required</sup> <a name="agent_runtime_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId"></a>

```python
agent_runtime_id: str
```

- *Type:* str

---

##### `agent_runtime_name`<sup>Required</sup> <a name="agent_runtime_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName"></a>

```python
agent_runtime_name: str
```

- *Type:* str

---

##### `filesystem_configurations`<sup>Required</sup> <a name="filesystem_configurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations"></a>

```python
filesystem_configurations: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a>

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri">container_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_uri`<sup>Required</sup> <a name="container_uri" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```python
container_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact">DataAwsccBedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_configuration`<sup>Required</sup> <a name="container_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration"></a>

```python
container_configuration: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironmentArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact">DataAwsccBedrockagentcoreHarnessEnvironmentArtifact</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment">agent_core_runtime_environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment">DataAwsccBedrockagentcoreHarnessEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_core_runtime_environment`<sup>Required</sup> <a name="agent_core_runtime_environment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment"></a>

```python
agent_core_runtime_environment: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment">DataAwsccBedrockagentcoreHarnessEnvironment</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount">messages_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig">retrieval_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `messages_count`<sup>Required</sup> <a name="messages_count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount"></a>

```python
messages_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieval_config`<sup>Required</sup> <a name="retrieval_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig"></a>

```python
retrieval_config: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore">relevance_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId">strategy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relevance_score`<sup>Required</sup> <a name="relevance_score" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore"></a>

```python
relevance_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_id`<sup>Required</sup> <a name="strategy_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId"></a>

```python
strategy_id: str
```

- *Type:* str

---

##### `top_k`<sup>Required</sup> <a name="top_k" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration">agent_core_memory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory">DataAwsccBedrockagentcoreHarnessMemory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_core_memory_configuration`<sup>Required</sup> <a name="agent_core_memory_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration"></a>

```python
agent_core_memory_configuration: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessMemory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory">DataAwsccBedrockagentcoreHarnessMemory</a>

---


### DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn">api_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_arn`<sup>Required</sup> <a name="api_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn"></a>

```python
api_key_arn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k`<sup>Required</sup> <a name="top_k" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn">api_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_arn`<sup>Required</sup> <a name="api_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn"></a>

```python
api_key_arn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig">bedrock_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig">gemini_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig">open_ai_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel">DataAwsccBedrockagentcoreHarnessModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bedrock_model_config`<sup>Required</sup> <a name="bedrock_model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig"></a>

```python
bedrock_model_config: DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a>

---

##### `gemini_model_config`<sup>Required</sup> <a name="gemini_model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig"></a>

```python
gemini_model_config: DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a>

---

##### `open_ai_model_config`<sup>Required</sup> <a name="open_ai_model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig"></a>

```python
open_ai_model_config: DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessModel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel">DataAwsccBedrockagentcoreHarnessModel</a>

---


### DataAwsccBedrockagentcoreHarnessSkillsList <a name="DataAwsccBedrockagentcoreHarnessSkillsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessSkillsOutputReference <a name="DataAwsccBedrockagentcoreHarnessSkillsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills">DataAwsccBedrockagentcoreHarnessSkills</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessSkills
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills">DataAwsccBedrockagentcoreHarnessSkills</a>

---


### DataAwsccBedrockagentcoreHarnessSystemPromptList <a name="DataAwsccBedrockagentcoreHarnessSystemPromptList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference <a name="DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt">DataAwsccBedrockagentcoreHarnessSystemPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessSystemPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt">DataAwsccBedrockagentcoreHarnessSystemPrompt</a>

---


### DataAwsccBedrockagentcoreHarnessTagsList <a name="DataAwsccBedrockagentcoreHarnessTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessTagsOutputReference <a name="DataAwsccBedrockagentcoreHarnessTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags">DataAwsccBedrockagentcoreHarnessTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags">DataAwsccBedrockagentcoreHarnessTags</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn">browser_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browser_arn`<sup>Required</sup> <a name="browser_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn"></a>

```python
browser_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn">code_interpreter_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_interpreter_arn`<sup>Required</sup> <a name="code_interpreter_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn"></a>

```python
code_interpreter_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters">custom_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl">default_return_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType">grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn">provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_parameters`<sup>Required</sup> <a name="custom_parameters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters"></a>

```python
custom_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `default_return_url`<sup>Required</sup> <a name="default_return_url" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl"></a>

```python
default_return_url: str
```

- *Type:* str

---

##### `grant_type`<sup>Required</sup> <a name="grant_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType"></a>

```python
grant_type: str
```

- *Type:* str

---

##### `provider_arn`<sup>Required</sup> <a name="provider_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn"></a>

```python
provider_arn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam">aws_iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_iam`<sup>Required</sup> <a name="aws_iam" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam"></a>

```python
aws_iam: str
```

- *Type:* str

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth"></a>

```python
oauth: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth">outbound_auth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `outbound_auth`<sup>Required</sup> <a name="outbound_auth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth"></a>

```python
outbound_auth: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser">agent_core_browser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter">agent_core_code_interpreter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway">agent_core_gateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction">inline_function</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp">remote_mcp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig">DataAwsccBedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_core_browser`<sup>Required</sup> <a name="agent_core_browser" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser"></a>

```python
agent_core_browser: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a>

---

##### `agent_core_code_interpreter`<sup>Required</sup> <a name="agent_core_code_interpreter" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter"></a>

```python
agent_core_code_interpreter: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a>

---

##### `agent_core_gateway`<sup>Required</sup> <a name="agent_core_gateway" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway"></a>

```python
agent_core_gateway: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a>

---

##### `inline_function`<sup>Required</sup> <a name="inline_function" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction"></a>

```python
inline_function: DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a>

---

##### `remote_mcp`<sup>Required</sup> <a name="remote_mcp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp"></a>

```python
remote_mcp: DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig">DataAwsccBedrockagentcoreHarnessToolsConfig</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers">headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---


### DataAwsccBedrockagentcoreHarnessToolsList <a name="DataAwsccBedrockagentcoreHarnessToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreHarnessToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreHarnessToolsOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools">DataAwsccBedrockagentcoreHarnessTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.config"></a>

```python
config: DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools">DataAwsccBedrockagentcoreHarnessTools</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow">sliding_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization">summarization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig">DataAwsccBedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sliding_window`<sup>Required</sup> <a name="sliding_window" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow"></a>

```python
sliding_window: DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a>

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization"></a>

```python
summarization: DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTruncationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig">DataAwsccBedrockagentcoreHarnessTruncationConfig</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount">messages_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `messages_count`<sup>Required</sup> <a name="messages_count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount"></a>

```python
messages_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages">preserve_recent_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt">summarization_system_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio">summary_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preserve_recent_messages`<sup>Required</sup> <a name="preserve_recent_messages" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages"></a>

```python
preserve_recent_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summarization_system_prompt`<sup>Required</sup> <a name="summarization_system_prompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt"></a>

```python
summarization_system_prompt: str
```

- *Type:* str

---

##### `summary_ratio`<sup>Required</sup> <a name="summary_ratio" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio"></a>

```python
summary_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_harness

dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation">DataAwsccBedrockagentcoreHarnessTruncation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.config"></a>

```python
config: DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreHarnessTruncation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation">DataAwsccBedrockagentcoreHarnessTruncation</a>

---



