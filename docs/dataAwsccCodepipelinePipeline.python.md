# `dataAwsccCodepipelinePipeline` Submodule <a name="`dataAwsccCodepipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelinePipeline <a name="DataAwsccCodepipelinePipeline" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codepipeline_pipeline awscc_codepipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodepipelinePipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodepipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore">artifact_store</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores">artifact_stores</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions">disable_inbound_stage_transitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode">execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType">pipeline_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate">restart_execution_on_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `artifact_store`<sup>Required</sup> <a name="artifact_store" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore"></a>

```python
artifact_store: DataAwsccCodepipelinePipelineArtifactStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a>

---

##### `artifact_stores`<sup>Required</sup> <a name="artifact_stores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores"></a>

```python
artifact_stores: DataAwsccCodepipelinePipelineArtifactStoresList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a>

---

##### `disable_inbound_stage_transitions`<sup>Required</sup> <a name="disable_inbound_stage_transitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions"></a>

```python
disable_inbound_stage_transitions: DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a>

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pipeline_type`<sup>Required</sup> <a name="pipeline_type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

---

##### `restart_execution_on_update`<sup>Required</sup> <a name="restart_execution_on_update" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate"></a>

```python
restart_execution_on_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages"></a>

```python
stages: DataAwsccCodepipelinePipelineStagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags"></a>

```python
tags: DataAwsccCodepipelinePipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers"></a>

```python
triggers: DataAwsccCodepipelinePipelineTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables"></a>

```python
variables: DataAwsccCodepipelinePipelineVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelinePipelineArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore()
```


### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey()
```


### DataAwsccCodepipelinePipelineArtifactStores <a name="DataAwsccCodepipelinePipelineArtifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores()
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore()
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey()
```


### DataAwsccCodepipelinePipelineConfig <a name="DataAwsccCodepipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelinePipelineDisableInboundStageTransitions <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions()
```


### DataAwsccCodepipelinePipelineStages <a name="DataAwsccCodepipelinePipelineStages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages()
```


### DataAwsccCodepipelinePipelineStagesActions <a name="DataAwsccCodepipelinePipelineStagesActions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions()
```


### DataAwsccCodepipelinePipelineStagesActionsActionTypeId <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId()
```


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables()
```


### DataAwsccCodepipelinePipelineStagesActionsInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts()
```


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts()
```


### DataAwsccCodepipelinePipelineStagesBeforeEntry <a name="DataAwsccCodepipelinePipelineStagesBeforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry()
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditions <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions()
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules()
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts()
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId()
```


### DataAwsccCodepipelinePipelineStagesBlockers <a name="DataAwsccCodepipelinePipelineStagesBlockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers()
```


### DataAwsccCodepipelinePipelineStagesOnFailure <a name="DataAwsccCodepipelinePipelineStagesOnFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure()
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditions <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions()
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules()
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts()
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId()
```


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration()
```


### DataAwsccCodepipelinePipelineStagesOnSuccess <a name="DataAwsccCodepipelinePipelineStagesOnSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess()
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditions <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions()
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules()
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts()
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId()
```


### DataAwsccCodepipelinePipelineTags <a name="DataAwsccCodepipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags()
```


### DataAwsccCodepipelinePipelineTriggers <a name="DataAwsccCodepipelinePipelineTriggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers()
```


### DataAwsccCodepipelinePipelineTriggersGitConfiguration <a name="DataAwsccCodepipelinePipelineTriggersGitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPush <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPush" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths()
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags()
```


### DataAwsccCodepipelinePipelineVariables <a name="DataAwsccCodepipelinePipelineVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineArtifactStore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineArtifactStoresArtifactStore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresList <a name="DataAwsccCodepipelinePipelineArtifactStoresList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineArtifactStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineArtifactStoresOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore">artifact_store</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_store`<sup>Required</sup> <a name="artifact_store" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore"></a>

```python
artifact_store: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineArtifactStores
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a>

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineDisableInboundStageTransitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a>

---


### DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesActionsActionTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a>

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesActionsInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsList <a name="DataAwsccCodepipelinePipelineStagesActionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files">files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files"></a>

```python
files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId">action_type_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts">output_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables">output_variables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder">run_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_id`<sup>Required</sup> <a name="action_type_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId"></a>

```python
action_type_id: DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables"></a>

```python
environment_variables: DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a>

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `output_artifacts`<sup>Required</sup> <a name="output_artifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts"></a>

```python
output_artifacts: DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a>

---

##### `output_variables`<sup>Required</sup> <a name="output_variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables"></a>

```python
output_variables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `run_order`<sup>Required</sup> <a name="run_order" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder"></a>

```python
run_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules"></a>

```python
rules: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBeforeEntryConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions"></a>

```python
conditions: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBeforeEntry
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a>

---


### DataAwsccCodepipelinePipelineStagesBlockersList <a name="DataAwsccCodepipelinePipelineStagesBlockersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesBlockersOutputReference <a name="DataAwsccCodepipelinePipelineStagesBlockersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesBlockers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a>

---


### DataAwsccCodepipelinePipelineStagesList <a name="DataAwsccCodepipelinePipelineStagesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules"></a>

```python
rules: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailureConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration">retry_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions"></a>

```python
conditions: DataAwsccCodepipelinePipelineStagesOnFailureConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `retry_configuration`<sup>Required</sup> <a name="retry_configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration"></a>

```python
retry_configuration: DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode">retry_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry_mode`<sup>Required</sup> <a name="retry_mode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```python
retry_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules"></a>

```python
rules: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnSuccessConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions"></a>

```python
conditions: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStagesOnSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a>

---


### DataAwsccCodepipelinePipelineStagesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry">before_entry</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers">blockers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess">on_success</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions"></a>

```python
actions: DataAwsccCodepipelinePipelineStagesActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a>

---

##### `before_entry`<sup>Required</sup> <a name="before_entry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry"></a>

```python
before_entry: DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a>

---

##### `blockers`<sup>Required</sup> <a name="blockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers"></a>

```python
blockers: DataAwsccCodepipelinePipelineStagesBlockersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure"></a>

```python
on_failure: DataAwsccCodepipelinePipelineStagesOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a>

---

##### `on_success`<sup>Required</sup> <a name="on_success" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess"></a>

```python
on_success: DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineStages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a>

---


### DataAwsccCodepipelinePipelineTagsList <a name="DataAwsccCodepipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineTagsOutputReference <a name="DataAwsccCodepipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName">source_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_request`<sup>Required</sup> <a name="pull_request" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest"></a>

```python
pull_request: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push"></a>

```python
push: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a>

---

##### `source_action_name`<sup>Required</sup> <a name="source_action_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName"></a>

```python
source_action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches"></a>

```python
branches: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```python
file_paths: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches"></a>

```python
branches: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a>

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths"></a>

```python
file_paths: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags"></a>

```python
tags: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPush
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a>

---


### DataAwsccCodepipelinePipelineTriggersList <a name="DataAwsccCodepipelinePipelineTriggersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineTriggersOutputReference <a name="DataAwsccCodepipelinePipelineTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration">git_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_configuration`<sup>Required</sup> <a name="git_configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration"></a>

```python
git_configuration: DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a>

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineTriggers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a>

---


### DataAwsccCodepipelinePipelineVariablesList <a name="DataAwsccCodepipelinePipelineVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelinePipelineVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelinePipelineVariablesOutputReference <a name="DataAwsccCodepipelinePipelineVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_pipeline

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelinePipelineVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a>

---



