# `dataAwsccQuicksightActionConnector` Submodule <a name="`dataAwsccQuicksightActionConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightActionConnector <a name="DataAwsccQuicksightActionConnector" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_action_connector awscc_quicksight_action_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_action_connector#id DataAwsccQuicksightActionConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightActionConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightActionConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightActionConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightActionConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_action_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightActionConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.actionConnectorId">action_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList">DataAwsccQuicksightActionConnectorPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList">DataAwsccQuicksightActionConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action_connector_id`<sup>Required</sup> <a name="action_connector_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.actionConnectorId"></a>

```python
action_connector_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.authenticationConfig"></a>

```python
authentication_config: DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference</a>

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled_actions`<sup>Required</sup> <a name="enabled_actions" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.permissions"></a>

```python
permissions: DataAwsccQuicksightActionConnectorPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList">DataAwsccQuicksightActionConnectorPermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.tags"></a>

```python
tags: DataAwsccQuicksightActionConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList">DataAwsccQuicksightActionConnectorTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightActionConnectorAuthenticationConfig <a name="DataAwsccQuicksightActionConnectorAuthenticationConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfig()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata()
```


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata()
```


### DataAwsccQuicksightActionConnectorConfig <a name="DataAwsccQuicksightActionConnectorConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_action_connector#id DataAwsccQuicksightActionConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightActionConnectorPermissions <a name="DataAwsccQuicksightActionConnectorPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissions()
```


### DataAwsccQuicksightActionConnectorTags <a name="DataAwsccQuicksightActionConnectorTags" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails">authorization_code_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_grant_details`<sup>Required</sup> <a name="authorization_code_grant_details" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails"></a>

```python
authorization_code_grant_details: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails">authorization_code_grant_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource">authorization_code_grant_credentials_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_grant_credentials_details`<sup>Required</sup> <a name="authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails"></a>

```python
authorization_code_grant_credentials_details: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a>

---

##### `authorization_code_grant_credentials_source`<sup>Required</sup> <a name="authorization_code_grant_credentials_source" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource"></a>

```python
authorization_code_grant_credentials_source: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails">client_credentials_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_credentials_grant_details`<sup>Required</sup> <a name="client_credentials_grant_details" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails"></a>

```python
client_credentials_grant_details: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails">client_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource">client_credentials_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `client_credentials_details`<sup>Required</sup> <a name="client_credentials_details" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails"></a>

```python
client_credentials_details: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a>

---

##### `client_credentials_source`<sup>Required</sup> <a name="client_credentials_source" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource"></a>

```python
client_credentials_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata">api_key_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata">authorization_code_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata">basic_auth_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata">client_credentials_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata">iam_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata">none_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_connection_metadata`<sup>Required</sup> <a name="api_key_connection_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata"></a>

```python
api_key_connection_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a>

---

##### `authorization_code_grant_metadata`<sup>Required</sup> <a name="authorization_code_grant_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata"></a>

```python
authorization_code_grant_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a>

---

##### `basic_auth_connection_metadata`<sup>Required</sup> <a name="basic_auth_connection_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata"></a>

```python
basic_auth_connection_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a>

---

##### `client_credentials_grant_metadata`<sup>Required</sup> <a name="client_credentials_grant_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata"></a>

```python
client_credentials_grant_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a>

---

##### `iam_connection_metadata`<sup>Required</sup> <a name="iam_connection_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata"></a>

```python
iam_connection_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a>

---

##### `none_connection_metadata`<sup>Required</sup> <a name="none_connection_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata"></a>

```python
none_connection_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---


### DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference <a name="DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata">authentication_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfig">DataAwsccQuicksightActionConnectorAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_metadata`<sup>Required</sup> <a name="authentication_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata"></a>

```python
authentication_metadata: DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">DataAwsccQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a>

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorAuthenticationConfig">DataAwsccQuicksightActionConnectorAuthenticationConfig</a>

---


### DataAwsccQuicksightActionConnectorPermissionsList <a name="DataAwsccQuicksightActionConnectorPermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightActionConnectorPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightActionConnectorPermissionsOutputReference <a name="DataAwsccQuicksightActionConnectorPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissions">DataAwsccQuicksightActionConnectorPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorPermissions">DataAwsccQuicksightActionConnectorPermissions</a>

---


### DataAwsccQuicksightActionConnectorTagsList <a name="DataAwsccQuicksightActionConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightActionConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightActionConnectorTagsOutputReference <a name="DataAwsccQuicksightActionConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_action_connector

dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTags">DataAwsccQuicksightActionConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightActionConnectorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightActionConnector.DataAwsccQuicksightActionConnectorTags">DataAwsccQuicksightActionConnectorTags</a>

---



