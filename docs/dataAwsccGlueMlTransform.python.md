# `dataAwsccGlueMlTransform` Submodule <a name="`dataAwsccGlueMlTransform` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueMlTransform <a name="DataAwsccGlueMlTransform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform#id DataAwsccGlueMlTransform#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueMlTransform to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.inputRecordTables">input_record_tables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference">DataAwsccGlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformEncryption">transform_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformId">transform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformParameters">transform_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference">DataAwsccGlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `input_record_tables`<sup>Required</sup> <a name="input_record_tables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.inputRecordTables"></a>

```python
input_record_tables: DataAwsccGlueMlTransformInputRecordTablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference">DataAwsccGlueMlTransformInputRecordTablesOutputReference</a>

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_encryption`<sup>Required</sup> <a name="transform_encryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformEncryption"></a>

```python
transform_encryption: DataAwsccGlueMlTransformTransformEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionOutputReference</a>

---

##### `transform_id`<sup>Required</sup> <a name="transform_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformId"></a>

```python
transform_id: str
```

- *Type:* str

---

##### `transform_parameters`<sup>Required</sup> <a name="transform_parameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformParameters"></a>

```python
transform_parameters: DataAwsccGlueMlTransformTransformParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference">DataAwsccGlueMlTransformTransformParametersOutputReference</a>

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueMlTransformConfig <a name="DataAwsccGlueMlTransformConfig" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform#id DataAwsccGlueMlTransform#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueMlTransformInputRecordTables <a name="DataAwsccGlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables()
```


### DataAwsccGlueMlTransformInputRecordTablesGlueTables <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables()
```


### DataAwsccGlueMlTransformTransformEncryption <a name="DataAwsccGlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption()
```


### DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption <a name="DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption()
```


### DataAwsccGlueMlTransformTransformParameters <a name="DataAwsccGlueMlTransformTransformParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters()
```


### DataAwsccGlueMlTransformTransformParametersFindMatchesParameters <a name="DataAwsccGlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueMlTransformInputRecordTablesGlueTablesList <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables">DataAwsccGlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformInputRecordTablesGlueTables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables">DataAwsccGlueMlTransformInputRecordTablesGlueTables</a>

---


### DataAwsccGlueMlTransformInputRecordTablesOutputReference <a name="DataAwsccGlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.glueTables">glue_tables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList">DataAwsccGlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables">DataAwsccGlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_tables`<sup>Required</sup> <a name="glue_tables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```python
glue_tables: DataAwsccGlueMlTransformInputRecordTablesGlueTablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList">DataAwsccGlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformInputRecordTables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables">DataAwsccGlueMlTransformInputRecordTables</a>

---


### DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">ml_user_data_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `ml_user_data_encryption_mode`<sup>Required</sup> <a name="ml_user_data_encryption_mode" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```python
ml_user_data_encryption_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### DataAwsccGlueMlTransformTransformEncryptionOutputReference <a name="DataAwsccGlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">ml_user_data_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">task_run_security_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption">DataAwsccGlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_user_data_encryption`<sup>Required</sup> <a name="ml_user_data_encryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```python
ml_user_data_encryption: DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `task_run_security_configuration_name`<sup>Required</sup> <a name="task_run_security_configuration_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```python
task_run_security_configuration_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformTransformEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption">DataAwsccGlueMlTransformTransformEncryption</a>

---


### DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">accuracy_cost_tradeoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforce_provided_labels</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">precision_recall_tradeoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primary_key_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters">DataAwsccGlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy_cost_tradeoff`<sup>Required</sup> <a name="accuracy_cost_tradeoff" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```python
accuracy_cost_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_provided_labels`<sup>Required</sup> <a name="enforce_provided_labels" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```python
enforce_provided_labels: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `precision_recall_tradeoff`<sup>Required</sup> <a name="precision_recall_tradeoff" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```python
precision_recall_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_key_column_name`<sup>Required</sup> <a name="primary_key_column_name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```python
primary_key_column_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters">DataAwsccGlueMlTransformTransformParametersFindMatchesParameters</a>

---


### DataAwsccGlueMlTransformTransformParametersOutputReference <a name="DataAwsccGlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_ml_transform

dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">find_matches_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference">DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.transformType">transform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters">DataAwsccGlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `find_matches_parameters`<sup>Required</sup> <a name="find_matches_parameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```python
find_matches_parameters: DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference">DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `transform_type`<sup>Required</sup> <a name="transform_type" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```python
transform_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueMlTransformTransformParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters">DataAwsccGlueMlTransformTransformParameters</a>

---



