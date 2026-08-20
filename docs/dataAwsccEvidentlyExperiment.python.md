# `dataAwsccEvidentlyExperiment` Submodule <a name="`dataAwsccEvidentlyExperiment` Submodule" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvidentlyExperiment <a name="DataAwsccEvidentlyExperiment" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_experiment awscc_evidently_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_experiment#id DataAwsccEvidentlyExperiment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEvidentlyExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEvidentlyExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEvidentlyExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEvidentlyExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvidentlyExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.metricGoals">metric_goals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList">DataAwsccEvidentlyExperimentMetricGoalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.onlineAbConfig">online_ab_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference">DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.removeSegment">remove_segment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.runningStatus">running_status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference">DataAwsccEvidentlyExperimentRunningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.segment">segment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList">DataAwsccEvidentlyExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList">DataAwsccEvidentlyExperimentTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metric_goals`<sup>Required</sup> <a name="metric_goals" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.metricGoals"></a>

```python
metric_goals: DataAwsccEvidentlyExperimentMetricGoalsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList">DataAwsccEvidentlyExperimentMetricGoalsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `online_ab_config`<sup>Required</sup> <a name="online_ab_config" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.onlineAbConfig"></a>

```python
online_ab_config: DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference">DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `randomization_salt`<sup>Required</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

---

##### `remove_segment`<sup>Required</sup> <a name="remove_segment" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.removeSegment"></a>

```python
remove_segment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `running_status`<sup>Required</sup> <a name="running_status" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.runningStatus"></a>

```python
running_status: DataAwsccEvidentlyExperimentRunningStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference">DataAwsccEvidentlyExperimentRunningStatusOutputReference</a>

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.segment"></a>

```python
segment: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.tags"></a>

```python
tags: DataAwsccEvidentlyExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList">DataAwsccEvidentlyExperimentTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.treatments"></a>

```python
treatments: DataAwsccEvidentlyExperimentTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList">DataAwsccEvidentlyExperimentTreatmentsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvidentlyExperimentConfig <a name="DataAwsccEvidentlyExperimentConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_experiment#id DataAwsccEvidentlyExperiment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvidentlyExperimentMetricGoals <a name="DataAwsccEvidentlyExperimentMetricGoals" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoals.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoals()
```


### DataAwsccEvidentlyExperimentOnlineAbConfig <a name="DataAwsccEvidentlyExperimentOnlineAbConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfig()
```


### DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights <a name="DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights()
```


### DataAwsccEvidentlyExperimentRunningStatus <a name="DataAwsccEvidentlyExperimentRunningStatus" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatus()
```


### DataAwsccEvidentlyExperimentTags <a name="DataAwsccEvidentlyExperimentTags" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTags()
```


### DataAwsccEvidentlyExperimentTreatments <a name="DataAwsccEvidentlyExperimentTreatments" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvidentlyExperimentMetricGoalsList <a name="DataAwsccEvidentlyExperimentMetricGoalsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyExperimentMetricGoalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyExperimentMetricGoalsOutputReference <a name="DataAwsccEvidentlyExperimentMetricGoalsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.desiredChange">desired_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoals">DataAwsccEvidentlyExperimentMetricGoals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_change`<sup>Required</sup> <a name="desired_change" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.desiredChange"></a>

```python
desired_change: str
```

- *Type:* str

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoalsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentMetricGoals
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentMetricGoals">DataAwsccEvidentlyExperimentMetricGoals</a>

---


### DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference <a name="DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName">control_treatment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights">treatment_weights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList">DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfig">DataAwsccEvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_treatment_name`<sup>Required</sup> <a name="control_treatment_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName"></a>

```python
control_treatment_name: str
```

- *Type:* str

---

##### `treatment_weights`<sup>Required</sup> <a name="treatment_weights" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights"></a>

```python
treatment_weights: DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList">DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentOnlineAbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfig">DataAwsccEvidentlyExperimentOnlineAbConfig</a>

---


### DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList <a name="DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference <a name="DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment">treatment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights">DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treatment`<sup>Required</sup> <a name="treatment" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment"></a>

```python
treatment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights">DataAwsccEvidentlyExperimentOnlineAbConfigTreatmentWeights</a>

---


### DataAwsccEvidentlyExperimentRunningStatusOutputReference <a name="DataAwsccEvidentlyExperimentRunningStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime">analysis_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatus">DataAwsccEvidentlyExperimentRunningStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_complete_time`<sup>Required</sup> <a name="analysis_complete_time" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime"></a>

```python
analysis_complete_time: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentRunningStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentRunningStatus">DataAwsccEvidentlyExperimentRunningStatus</a>

---


### DataAwsccEvidentlyExperimentTagsList <a name="DataAwsccEvidentlyExperimentTagsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyExperimentTagsOutputReference <a name="DataAwsccEvidentlyExperimentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTags">DataAwsccEvidentlyExperimentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTags">DataAwsccEvidentlyExperimentTags</a>

---


### DataAwsccEvidentlyExperimentTreatmentsList <a name="DataAwsccEvidentlyExperimentTreatmentsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyExperimentTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyExperimentTreatmentsOutputReference <a name="DataAwsccEvidentlyExperimentTreatmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_experiment

dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.treatmentName">treatment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.variation">variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatments">DataAwsccEvidentlyExperimentTreatments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `treatment_name`<sup>Required</sup> <a name="treatment_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.treatmentName"></a>

```python
treatment_name: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.variation"></a>

```python
variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyExperimentTreatments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyExperiment.DataAwsccEvidentlyExperimentTreatments">DataAwsccEvidentlyExperimentTreatments</a>

---



