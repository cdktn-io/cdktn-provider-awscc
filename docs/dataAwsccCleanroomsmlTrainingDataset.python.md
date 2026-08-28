# `dataAwsccCleanroomsmlTrainingDataset` Submodule <a name="`dataAwsccCleanroomsmlTrainingDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsmlTrainingDataset <a name="DataAwsccCleanroomsmlTrainingDataset" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset#id DataAwsccCleanroomsmlTrainingDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsmlTrainingDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsmlTrainingDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsmlTrainingDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList">DataAwsccCleanroomsmlTrainingDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingData">training_data</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingDatasetArn">training_dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tags"></a>

```python
tags: DataAwsccCleanroomsmlTrainingDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList">DataAwsccCleanroomsmlTrainingDatasetTagsList</a>

---

##### `training_data`<sup>Required</sup> <a name="training_data" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingData"></a>

```python
training_data: DataAwsccCleanroomsmlTrainingDatasetTrainingDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataList</a>

---

##### `training_dataset_arn`<sup>Required</sup> <a name="training_dataset_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingDatasetArn"></a>

```python
training_dataset_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsmlTrainingDatasetConfig <a name="DataAwsccCleanroomsmlTrainingDatasetConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset#id DataAwsccCleanroomsmlTrainingDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsmlTrainingDatasetTags <a name="DataAwsccCleanroomsmlTrainingDatasetTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags()
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingData <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingData" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData()
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig()
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource()
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource()
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsmlTrainingDatasetTagsList <a name="DataAwsccCleanroomsmlTrainingDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags">DataAwsccCleanroomsmlTrainingDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags">DataAwsccCleanroomsmlTrainingDatasetTags</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource">glue_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_data_source`<sup>Required</sup> <a name="glue_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource"></a>

```python
glue_data_source: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource"></a>

```python
data_source: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema"></a>

```python
schema: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes">column_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_types`<sup>Required</sup> <a name="column_types" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes"></a>

```python
column_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataList <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_training_dataset

dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig">input_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData">DataAwsccCleanroomsmlTrainingDatasetTrainingData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_config`<sup>Required</sup> <a name="input_config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig"></a>

```python
input_config: DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlTrainingDatasetTrainingData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData">DataAwsccCleanroomsmlTrainingDatasetTrainingData</a>

---



