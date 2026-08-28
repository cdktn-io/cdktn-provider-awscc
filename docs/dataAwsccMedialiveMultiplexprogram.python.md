# `dataAwsccMedialiveMultiplexprogram` Submodule <a name="`dataAwsccMedialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveMultiplexprogram <a name="DataAwsccMedialiveMultiplexprogram" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram#id DataAwsccMedialiveMultiplexprogram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMedialiveMultiplexprogram to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId">multiplex_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings">multiplex_program_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap">packet_identifiers_map</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails">pipeline_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline">preferred_channel_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName">program_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `multiplex_id`<sup>Required</sup> <a name="multiplex_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId"></a>

```python
multiplex_id: str
```

- *Type:* str

---

##### `multiplex_program_settings`<sup>Required</sup> <a name="multiplex_program_settings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```python
multiplex_program_settings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `packet_identifiers_map`<sup>Required</sup> <a name="packet_identifiers_map" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```python
packet_identifiers_map: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `pipeline_details`<sup>Required</sup> <a name="pipeline_details" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails"></a>

```python
pipeline_details: DataAwsccMedialiveMultiplexprogramPipelineDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `preferred_channel_pipeline`<sup>Required</sup> <a name="preferred_channel_pipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```python
preferred_channel_pipeline: str
```

- *Type:* str

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName"></a>

```python
program_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveMultiplexprogramConfig <a name="DataAwsccMedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram#id DataAwsccMedialiveMultiplexprogram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings()
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor()
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings()
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings()
```


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap()
```


### DataAwsccMedialiveMultiplexprogramPipelineDetails <a name="DataAwsccMedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferred_channel_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">program_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">service_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">video_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_channel_pipeline`<sup>Required</sup> <a name="preferred_channel_pipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```python
preferred_channel_pipeline: str
```

- *Type:* str

---

##### `program_number`<sup>Required</sup> <a name="program_number" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```python
program_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_descriptor`<sup>Required</sup> <a name="service_descriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```python
service_descriptor: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `video_settings`<sup>Required</sup> <a name="video_settings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```python
video_settings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constant_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmux_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constant_bitrate`<sup>Required</sup> <a name="constant_bitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```python
constant_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statmux_settings`<sup>Required</sup> <a name="statmux_settings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```python
statmux_settings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bitrate`<sup>Required</sup> <a name="maximum_bitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bitrate`<sup>Required</sup> <a name="minimum_bitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```python
minimum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">audio_pids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">dvb_sub_pids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">dvb_teletext_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">etv_platform_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">etv_signal_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">klv_data_pids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">pcr_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">pmt_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">private_metadata_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">scte27_pids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">scte35_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">timed_metadata_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">video_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_pids`<sup>Required</sup> <a name="audio_pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```python
audio_pids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `dvb_sub_pids`<sup>Required</sup> <a name="dvb_sub_pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```python
dvb_sub_pids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `dvb_teletext_pid`<sup>Required</sup> <a name="dvb_teletext_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```python
dvb_teletext_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etv_platform_pid`<sup>Required</sup> <a name="etv_platform_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```python
etv_platform_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etv_signal_pid`<sup>Required</sup> <a name="etv_signal_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```python
etv_signal_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `klv_data_pids`<sup>Required</sup> <a name="klv_data_pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```python
klv_data_pids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `pcr_pid`<sup>Required</sup> <a name="pcr_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```python
pcr_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pmt_pid`<sup>Required</sup> <a name="pmt_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```python
pmt_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_metadata_pid`<sup>Required</sup> <a name="private_metadata_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```python
private_metadata_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scte27_pids`<sup>Required</sup> <a name="scte27_pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```python
scte27_pids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `scte35_pid`<sup>Required</sup> <a name="scte35_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```python
scte35_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timed_metadata_pid`<sup>Required</sup> <a name="timed_metadata_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```python
timed_metadata_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `video_pid`<sup>Required</sup> <a name="video_pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```python
video_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsList <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_multiplexprogram

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">active_channel_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_channel_pipeline`<sup>Required</sup> <a name="active_channel_pipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```python
active_channel_pipeline: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveMultiplexprogramPipelineDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a>

---



