# `dataAwsccImagebuilderImageRecipe` Submodule <a name="`dataAwsccImagebuilderImageRecipe` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderImageRecipe <a name="DataAwsccImagebuilderImageRecipe" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_image_recipe#id DataAwsccImagebuilderImageRecipe#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccImagebuilderImageRecipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccImagebuilderImageRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderImageRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.additionalInstanceConfiguration">additional_instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.amiTags">ami_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.amiWatermarks">ami_watermarks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList">DataAwsccImagebuilderImageRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference">DataAwsccImagebuilderImageRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_instance_configuration`<sup>Required</sup> <a name="additional_instance_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.additionalInstanceConfiguration"></a>

```python
additional_instance_configuration: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a>

---

##### `ami_tags`<sup>Required</sup> <a name="ami_tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.amiTags"></a>

```python
ami_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ami_watermarks`<sup>Required</sup> <a name="ami_watermarks" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.amiWatermarks"></a>

```python
ami_watermarks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.blockDeviceMappings"></a>

```python
block_device_mappings: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList</a>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.components"></a>

```python
components: DataAwsccImagebuilderImageRecipeComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList">DataAwsccImagebuilderImageRecipeComponentsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.latestVersion"></a>

```python
latest_version: DataAwsccImagebuilderImageRecipeLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference">DataAwsccImagebuilderImageRecipeLatestVersionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration <a name="DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration()
```


### DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent <a name="DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent()
```


### DataAwsccImagebuilderImageRecipeBlockDeviceMappings <a name="DataAwsccImagebuilderImageRecipeBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappings()
```


### DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs <a name="DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs()
```


### DataAwsccImagebuilderImageRecipeComponents <a name="DataAwsccImagebuilderImageRecipeComponents" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponents()
```


### DataAwsccImagebuilderImageRecipeComponentsParameters <a name="DataAwsccImagebuilderImageRecipeComponentsParameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParameters()
```


### DataAwsccImagebuilderImageRecipeConfig <a name="DataAwsccImagebuilderImageRecipeConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_image_recipe#id DataAwsccImagebuilderImageRecipe#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderImageRecipeLatestVersion <a name="DataAwsccImagebuilderImageRecipeLatestVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersion()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference <a name="DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride">user_data_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `systems_manager_agent`<sup>Required</sup> <a name="systems_manager_agent" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent"></a>

```python
systems_manager_agent: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a>

---

##### `user_data_override`<sup>Required</sup> <a name="user_data_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride"></a>

```python
user_data_override: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---


### DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference <a name="DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstall_after_build</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uninstall_after_build`<sup>Required</sup> <a name="uninstall_after_build" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```python
uninstall_after_build: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---


### DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference <a name="DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---


### DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList <a name="DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference <a name="DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappings">DataAwsccImagebuilderImageRecipeBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeBlockDeviceMappings">DataAwsccImagebuilderImageRecipeBlockDeviceMappings</a>

---


### DataAwsccImagebuilderImageRecipeComponentsList <a name="DataAwsccImagebuilderImageRecipeComponentsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderImageRecipeComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderImageRecipeComponentsOutputReference <a name="DataAwsccImagebuilderImageRecipeComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList">DataAwsccImagebuilderImageRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponents">DataAwsccImagebuilderImageRecipeComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.parameters"></a>

```python
parameters: DataAwsccImagebuilderImageRecipeComponentsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList">DataAwsccImagebuilderImageRecipeComponentsParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponents">DataAwsccImagebuilderImageRecipeComponents</a>

---


### DataAwsccImagebuilderImageRecipeComponentsParametersList <a name="DataAwsccImagebuilderImageRecipeComponentsParametersList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference <a name="DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParameters">DataAwsccImagebuilderImageRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeComponentsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeComponentsParameters">DataAwsccImagebuilderImageRecipeComponentsParameters</a>

---


### DataAwsccImagebuilderImageRecipeLatestVersionOutputReference <a name="DataAwsccImagebuilderImageRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_image_recipe

dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersion">DataAwsccImagebuilderImageRecipeLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.major"></a>

```python
major: str
```

- *Type:* str

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.minor"></a>

```python
minor: str
```

- *Type:* str

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.patch"></a>

```python
patch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderImageRecipeLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImageRecipe.DataAwsccImagebuilderImageRecipeLatestVersion">DataAwsccImagebuilderImageRecipeLatestVersion</a>

---



