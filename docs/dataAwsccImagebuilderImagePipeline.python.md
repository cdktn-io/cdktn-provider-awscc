# `dataAwsccImagebuilderImagePipeline` Submodule <a name="`dataAwsccImagebuilderImagePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderImagePipeline <a name="DataAwsccImagebuilderImagePipeline" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline#id DataAwsccImagebuilderImagePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccImagebuilderImagePipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.containerRecipeArn">container_recipe_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.distributionConfigurationArn">distribution_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">enhanced_image_metadata_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageRecipeArn">image_recipe_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTags">image_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTestsConfiguration">image_tests_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.infrastructureConfigurationArn">infrastructure_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference">DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference">DataAwsccImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.workflows">workflows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList">DataAwsccImagebuilderImagePipelineWorkflowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `container_recipe_arn`<sup>Required</sup> <a name="container_recipe_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.containerRecipeArn"></a>

```python
container_recipe_arn: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution_configuration_arn`<sup>Required</sup> <a name="distribution_configuration_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```python
distribution_configuration_arn: str
```

- *Type:* str

---

##### `enhanced_image_metadata_enabled`<sup>Required</sup> <a name="enhanced_image_metadata_enabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```python
enhanced_image_metadata_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `image_recipe_arn`<sup>Required</sup> <a name="image_recipe_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageRecipeArn"></a>

```python
image_recipe_arn: str
```

- *Type:* str

---

##### `image_scanning_configuration`<sup>Required</sup> <a name="image_scanning_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```python
image_scanning_configuration: DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `image_tags`<sup>Required</sup> <a name="image_tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTags"></a>

```python
image_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `image_tests_configuration`<sup>Required</sup> <a name="image_tests_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```python
image_tests_configuration: DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `infrastructure_configuration_arn`<sup>Required</sup> <a name="infrastructure_configuration_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```python
infrastructure_configuration_arn: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.loggingConfiguration"></a>

```python
logging_configuration: DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference">DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.schedule"></a>

```python
schedule: DataAwsccImagebuilderImagePipelineScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference">DataAwsccImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `workflows`<sup>Required</sup> <a name="workflows" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.workflows"></a>

```python
workflows: DataAwsccImagebuilderImagePipelineWorkflowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList">DataAwsccImagebuilderImagePipelineWorkflowsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderImagePipelineConfig <a name="DataAwsccImagebuilderImagePipelineConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline#id DataAwsccImagebuilderImagePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderImagePipelineImageScanningConfiguration <a name="DataAwsccImagebuilderImagePipelineImageScanningConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration()
```


### DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration()
```


### DataAwsccImagebuilderImagePipelineImageTestsConfiguration <a name="DataAwsccImagebuilderImagePipelineImageTestsConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration()
```


### DataAwsccImagebuilderImagePipelineLoggingConfiguration <a name="DataAwsccImagebuilderImagePipelineLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration()
```


### DataAwsccImagebuilderImagePipelineSchedule <a name="DataAwsccImagebuilderImagePipelineSchedule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule()
```


### DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy <a name="DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy()
```


### DataAwsccImagebuilderImagePipelineWorkflows <a name="DataAwsccImagebuilderImagePipelineWorkflows" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows()
```


### DataAwsccImagebuilderImagePipelineWorkflowsParameters <a name="DataAwsccImagebuilderImagePipelineWorkflowsParameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_tags`<sup>Required</sup> <a name="container_tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">ecr_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">image_scanning_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ecr_configuration`<sup>Required</sup> <a name="ecr_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```python
ecr_configuration: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `image_scanning_enabled`<sup>Required</sup> <a name="image_scanning_enabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```python
image_scanning_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineImageScanningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">image_tests_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration">DataAwsccImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_tests_enabled`<sup>Required</sup> <a name="image_tests_enabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```python
image_tests_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeout_minutes`<sup>Required</sup> <a name="timeout_minutes" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```python
timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineImageTestsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration">DataAwsccImagebuilderImagePipelineImageTestsConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName">image_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName">pipeline_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration">DataAwsccImagebuilderImagePipelineLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_log_group_name`<sup>Required</sup> <a name="image_log_group_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName"></a>

```python
image_log_group_name: str
```

- *Type:* str

---

##### `pipeline_log_group_name`<sup>Required</sup> <a name="pipeline_log_group_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName"></a>

```python
pipeline_log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration">DataAwsccImagebuilderImagePipelineLoggingConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference <a name="DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount">failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_count`<sup>Required</sup> <a name="failure_count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount"></a>

```python
failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy</a>

---


### DataAwsccImagebuilderImagePipelineScheduleOutputReference <a name="DataAwsccImagebuilderImagePipelineScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy">auto_disable_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">pipeline_execution_start_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule">DataAwsccImagebuilderImagePipelineSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_disable_policy`<sup>Required</sup> <a name="auto_disable_policy" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy"></a>

```python
auto_disable_policy: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a>

---

##### `pipeline_execution_start_condition`<sup>Required</sup> <a name="pipeline_execution_start_condition" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```python
pipeline_execution_start_condition: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule">DataAwsccImagebuilderImagePipelineSchedule</a>

---


### DataAwsccImagebuilderImagePipelineWorkflowsList <a name="DataAwsccImagebuilderImagePipelineWorkflowsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderImagePipelineWorkflowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderImagePipelineWorkflowsOutputReference <a name="DataAwsccImagebuilderImagePipelineWorkflowsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure">on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup">parallel_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList">DataAwsccImagebuilderImagePipelineWorkflowsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows">DataAwsccImagebuilderImagePipelineWorkflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure"></a>

```python
on_failure: str
```

- *Type:* str

---

##### `parallel_group`<sup>Required</sup> <a name="parallel_group" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup"></a>

```python
parallel_group: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parameters"></a>

```python
parameters: DataAwsccImagebuilderImagePipelineWorkflowsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList">DataAwsccImagebuilderImagePipelineWorkflowsParametersList</a>

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineWorkflows
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows">DataAwsccImagebuilderImagePipelineWorkflows</a>

---


### DataAwsccImagebuilderImagePipelineWorkflowsParametersList <a name="DataAwsccImagebuilderImagePipelineWorkflowsParametersList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference <a name="DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_pipeline

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters">DataAwsccImagebuilderImagePipelineWorkflowsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImagePipelineWorkflowsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters">DataAwsccImagebuilderImagePipelineWorkflowsParameters</a>

---



