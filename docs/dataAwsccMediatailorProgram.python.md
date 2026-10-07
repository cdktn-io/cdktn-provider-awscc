# `dataAwsccMediatailorProgram` Submodule <a name="`dataAwsccMediatailorProgram` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorProgram <a name="DataAwsccMediatailorProgram" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgram(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#id DataAwsccMediatailorProgram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediatailorProgram to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList">DataAwsccMediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.audienceMedia">audience_media</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList">DataAwsccMediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference">DataAwsccMediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.liveSourceName">live_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.programName">program_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference">DataAwsccMediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.adBreaks"></a>

```python
ad_breaks: DataAwsccMediatailorProgramAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList">DataAwsccMediatailorProgramAdBreaksList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `audience_media`<sup>Required</sup> <a name="audience_media" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.audienceMedia"></a>

```python
audience_media: DataAwsccMediatailorProgramAudienceMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList">DataAwsccMediatailorProgramAudienceMediaList</a>

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.clipRange"></a>

```python
clip_range: DataAwsccMediatailorProgramClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference">DataAwsccMediatailorProgramClipRangeOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.programName"></a>

```python
program_name: str
```

- *Type:* str

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduleConfiguration"></a>

```python
schedule_configuration: DataAwsccMediatailorProgramScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference">DataAwsccMediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorProgramAdBreaks <a name="DataAwsccMediatailorProgramAdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks()
```


### DataAwsccMediatailorProgramAdBreaksAdBreakMetadata <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata()
```


### DataAwsccMediatailorProgramAdBreaksSlate <a name="DataAwsccMediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate()
```


### DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage <a name="DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage()
```


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessage <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage()
```


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors()
```


### DataAwsccMediatailorProgramAudienceMedia <a name="DataAwsccMediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMedia <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors()
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange()
```


### DataAwsccMediatailorProgramClipRange <a name="DataAwsccMediatailorProgramClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange()
```


### DataAwsccMediatailorProgramConfig <a name="DataAwsccMediatailorProgramConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#id DataAwsccMediatailorProgram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorProgramScheduleConfiguration <a name="DataAwsccMediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration()
```


### DataAwsccMediatailorProgramScheduleConfigurationClipRange <a name="DataAwsccMediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange()
```


### DataAwsccMediatailorProgramScheduleConfigurationTransition <a name="DataAwsccMediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaksAdBreakMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAdBreaksAdBreakMetadata</a>

---


### DataAwsccMediatailorProgramAdBreaksList <a name="DataAwsccMediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAdBreaksOutputReference <a name="DataAwsccMediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">ad_break_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks">DataAwsccMediatailorProgramAdBreaks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_break_metadata`<sup>Required</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```python
ad_break_metadata: DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `offset_millis`<sup>Required</sup> <a name="offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.slate"></a>

```python
slate: DataAwsccMediatailorProgramAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `splice_insert_message`<sup>Required</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```python
splice_insert_message: DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `time_signal_message`<sup>Required</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```python
time_signal_message: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks">DataAwsccMediatailorProgramAdBreaks</a>

---


### DataAwsccMediatailorProgramAdBreaksSlateOutputReference <a name="DataAwsccMediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate">DataAwsccMediatailorProgramAdBreaksSlate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate">DataAwsccMediatailorProgramAdBreaksSlate</a>

---


### DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_num`<sup>Required</sup> <a name="avail_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected`<sup>Required</sup> <a name="avails_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id`<sup>Required</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id`<sup>Required</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage</a>

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_descriptors`<sup>Required</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAdBreaksTimeSignalMessage</a>

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_event_id`<sup>Required</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id`<sup>Required</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid`<sup>Required</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

---

##### `segmentation_upid_type`<sup>Required</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num`<sup>Required</sup> <a name="segment_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected`<sup>Required</sup> <a name="segments_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num`<sup>Required</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected`<sup>Required</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">ad_break_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_break_metadata`<sup>Required</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```python
ad_break_metadata: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `offset_millis`<sup>Required</sup> <a name="offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```python
slate: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `splice_insert_message`<sup>Required</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```python
splice_insert_message: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `time_signal_message`<sup>Required</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```python
time_signal_message: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_num`<sup>Required</sup> <a name="avail_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected`<sup>Required</sup> <a name="avails_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id`<sup>Required</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id`<sup>Required</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_descriptors`<sup>Required</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_event_id`<sup>Required</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id`<sup>Required</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid`<sup>Required</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

---

##### `segmentation_upid_type`<sup>Required</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num`<sup>Required</sup> <a name="segment_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected`<sup>Required</sup> <a name="segments_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num`<sup>Required</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected`<sup>Required</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">live_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia">DataAwsccMediatailorProgramAudienceMediaAlternateMedia</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```python
ad_breaks: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```python
clip_range: DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

---

##### `scheduled_start_time_millis`<sup>Required</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMediaAlternateMedia
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia">DataAwsccMediatailorProgramAudienceMediaAlternateMedia</a>

---


### DataAwsccMediatailorProgramAudienceMediaList <a name="DataAwsccMediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorProgramAudienceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorProgramAudienceMediaOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.alternateMedia">alternate_media</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia">DataAwsccMediatailorProgramAudienceMedia</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternate_media`<sup>Required</sup> <a name="alternate_media" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```python
alternate_media: DataAwsccMediatailorProgramAudienceMediaAlternateMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramAudienceMedia
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia">DataAwsccMediatailorProgramAudienceMedia</a>

---


### DataAwsccMediatailorProgramClipRangeOutputReference <a name="DataAwsccMediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange">DataAwsccMediatailorProgramClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange">DataAwsccMediatailorProgramClipRange</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange">DataAwsccMediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramScheduleConfigurationClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange">DataAwsccMediatailorProgramScheduleConfigurationClipRange</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference">DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference">DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration">DataAwsccMediatailorProgramScheduleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```python
clip_range: DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference">DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```python
transition: DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference">DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration">DataAwsccMediatailorProgramScheduleConfiguration</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_program

dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">relative_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">relative_program</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition">DataAwsccMediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relative_position`<sup>Required</sup> <a name="relative_position" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```python
relative_position: str
```

- *Type:* str

---

##### `relative_program`<sup>Required</sup> <a name="relative_program" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```python
relative_program: str
```

- *Type:* str

---

##### `scheduled_start_time_millis`<sup>Required</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorProgramScheduleConfigurationTransition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition">DataAwsccMediatailorProgramScheduleConfigurationTransition</a>

---



