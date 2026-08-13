# `dataAwsccGlueUserDefinedFunction` Submodule <a name="`dataAwsccGlueUserDefinedFunction` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueUserDefinedFunction <a name="DataAwsccGlueUserDefinedFunction" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_user_defined_function awscc_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_user_defined_function#id DataAwsccGlueUserDefinedFunction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueUserDefinedFunction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueUserDefinedFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueUserDefinedFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueUserDefinedFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueUserDefinedFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.functionType">function_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.ownerName">owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.resourceUris">resource_uris</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList">DataAwsccGlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_type`<sup>Required</sup> <a name="function_type" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.functionType"></a>

```python
function_type: str
```

- *Type:* str

---

##### `owner_name`<sup>Required</sup> <a name="owner_name" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.ownerName"></a>

```python
owner_name: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

##### `resource_uris`<sup>Required</sup> <a name="resource_uris" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.resourceUris"></a>

```python
resource_uris: DataAwsccGlueUserDefinedFunctionResourceUrisList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList">DataAwsccGlueUserDefinedFunctionResourceUrisList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueUserDefinedFunctionConfig <a name="DataAwsccGlueUserDefinedFunctionConfig" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_user_defined_function#id DataAwsccGlueUserDefinedFunction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueUserDefinedFunctionResourceUris <a name="DataAwsccGlueUserDefinedFunctionResourceUris" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUris.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUris()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueUserDefinedFunctionResourceUrisList <a name="DataAwsccGlueUserDefinedFunctionResourceUrisList" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference <a name="DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_user_defined_function

dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUris">DataAwsccGlueUserDefinedFunctionResourceUris</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueUserDefinedFunctionResourceUris
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueUserDefinedFunction.DataAwsccGlueUserDefinedFunctionResourceUris">DataAwsccGlueUserDefinedFunctionResourceUris</a>

---



