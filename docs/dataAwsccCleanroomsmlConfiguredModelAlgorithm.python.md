# `dataAwsccCleanroomsmlConfiguredModelAlgorithm` Submodule <a name="`dataAwsccCleanroomsmlConfiguredModelAlgorithm` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithm <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithm" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cleanroomsml_configured_model_algorithm#id DataAwsccCleanroomsmlConfiguredModelAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsmlConfiguredModelAlgorithm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsmlConfiguredModelAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsmlConfiguredModelAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn">configured_model_algorithm_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig">inference_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig">training_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configured_model_algorithm_arn`<sup>Required</sup> <a name="configured_model_algorithm_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn"></a>

```python
configured_model_algorithm_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inference_container_config`<sup>Required</sup> <a name="inference_container_config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig"></a>

```python
inference_container_config: DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a>

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tags"></a>

```python
tags: DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList</a>

---

##### `training_container_config`<sup>Required</sup> <a name="training_container_config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig"></a>

```python
training_container_config: DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cleanroomsml_configured_model_algorithm#id DataAwsccCleanroomsmlConfiguredModelAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig()
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTags <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags()
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig()
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlConfiguredModelAlgorithmTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmTags</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanroomsml_configured_model_algorithm

dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions">metric_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `metric_definitions`<sup>Required</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions"></a>

```python
metric_definitions: DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---



