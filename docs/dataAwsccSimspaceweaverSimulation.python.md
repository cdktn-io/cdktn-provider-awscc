# `dataAwsccSimspaceweaverSimulation` Submodule <a name="`dataAwsccSimspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSimspaceweaverSimulation <a name="DataAwsccSimspaceweaverSimulation" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/simspaceweaver_simulation#id DataAwsccSimspaceweaverSimulation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSimspaceweaverSimulation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload">describe_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location">schema_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location">snapshot_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `describe_payload`<sup>Required</sup> <a name="describe_payload" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload"></a>

```python
describe_payload: str
```

- *Type:* str

---

##### `maximum_duration`<sup>Required</sup> <a name="maximum_duration" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schema_s3_location`<sup>Required</sup> <a name="schema_s3_location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location"></a>

```python
schema_s3_location: DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `snapshot_s3_location`<sup>Required</sup> <a name="snapshot_s3_location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location"></a>

```python
snapshot_s3_location: DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSimspaceweaverSimulationConfig <a name="DataAwsccSimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/simspaceweaver_simulation#id DataAwsccSimspaceweaverSimulation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSimspaceweaverSimulationSchemaS3Location <a name="DataAwsccSimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location()
```


### DataAwsccSimspaceweaverSimulationSnapshotS3Location <a name="DataAwsccSimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSimspaceweaverSimulationSchemaS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a>

---


### DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_simspaceweaver_simulation

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSimspaceweaverSimulationSnapshotS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a>

---



