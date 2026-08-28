# `dataAwsccCodeguruprofilerProfilingGroup` Submodule <a name="`dataAwsccCodeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodeguruprofilerProfilingGroup <a name="DataAwsccCodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeguruprofiler_profiling_group#id DataAwsccCodeguruprofilerProfilingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodeguruprofilerProfilingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.agentPermissions">agent_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference">DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">anomaly_detection_notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.profilingGroupName">profiling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList">DataAwsccCodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `agent_permissions`<sup>Required</sup> <a name="agent_permissions" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```python
agent_permissions: DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference">DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `anomaly_detection_notification_configuration`<sup>Required</sup> <a name="anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```python
anomaly_detection_notification_configuration: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `profiling_group_name`<sup>Required</sup> <a name="profiling_group_name" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```python
profiling_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tags"></a>

```python
tags: DataAwsccCodeguruprofilerProfilingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList">DataAwsccCodeguruprofilerProfilingGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodeguruprofilerProfilingGroupAgentPermissions <a name="DataAwsccCodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions()
```


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration()
```


### DataAwsccCodeguruprofilerProfilingGroupConfig <a name="DataAwsccCodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeguruprofiler_profiling_group#id DataAwsccCodeguruprofilerProfilingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodeguruprofilerProfilingGroupTags <a name="DataAwsccCodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions">DataAwsccCodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeguruprofilerProfilingGroupAgentPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions">DataAwsccCodeguruprofilerProfilingGroupAgentPermissions</a>

---


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">channel_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_uri`<sup>Required</sup> <a name="channel_uri" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```python
channel_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>

---


### DataAwsccCodeguruprofilerProfilingGroupTagsList <a name="DataAwsccCodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeguruprofiler_profiling_group

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags">DataAwsccCodeguruprofilerProfilingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeguruprofilerProfilingGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags">DataAwsccCodeguruprofilerProfilingGroupTags</a>

---



