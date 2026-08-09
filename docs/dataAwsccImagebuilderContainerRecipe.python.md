# `dataAwsccImagebuilderContainerRecipe` Submodule <a name="`dataAwsccImagebuilderContainerRecipe` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderContainerRecipe <a name="DataAwsccImagebuilderContainerRecipe" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_container_recipe awscc_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_container_recipe#id DataAwsccImagebuilderContainerRecipe#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccImagebuilderContainerRecipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccImagebuilderContainerRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderContainerRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList">DataAwsccImagebuilderContainerRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dockerfileTemplateData">dockerfile_template_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dockerfileTemplateUri">dockerfile_template_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.imageOsVersionOverride">image_os_version_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference">DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference">DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.platformOverride">platform_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference">DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.components"></a>

```python
components: DataAwsccImagebuilderContainerRecipeComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList">DataAwsccImagebuilderContainerRecipeComponentsList</a>

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dockerfile_template_data`<sup>Required</sup> <a name="dockerfile_template_data" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```python
dockerfile_template_data: str
```

- *Type:* str

---

##### `dockerfile_template_uri`<sup>Required</sup> <a name="dockerfile_template_uri" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```python
dockerfile_template_uri: str
```

- *Type:* str

---

##### `image_os_version_override`<sup>Required</sup> <a name="image_os_version_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.imageOsVersionOverride"></a>

```python
image_os_version_override: str
```

- *Type:* str

---

##### `instance_configuration`<sup>Required</sup> <a name="instance_configuration" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```python
instance_configuration: DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference">DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.latestVersion"></a>

```python
latest_version: DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference">DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `platform_override`<sup>Required</sup> <a name="platform_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.platformOverride"></a>

```python
platform_override: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.targetRepository"></a>

```python
target_repository: DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference">DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderContainerRecipeComponents <a name="DataAwsccImagebuilderContainerRecipeComponents" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponents()
```


### DataAwsccImagebuilderContainerRecipeComponentsParameters <a name="DataAwsccImagebuilderContainerRecipeComponentsParameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParameters()
```


### DataAwsccImagebuilderContainerRecipeConfig <a name="DataAwsccImagebuilderContainerRecipeConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_container_recipe#id DataAwsccImagebuilderContainerRecipe#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderContainerRecipeInstanceConfiguration <a name="DataAwsccImagebuilderContainerRecipeInstanceConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfiguration()
```


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings()
```


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs()
```


### DataAwsccImagebuilderContainerRecipeLatestVersion <a name="DataAwsccImagebuilderContainerRecipeLatestVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersion()
```


### DataAwsccImagebuilderContainerRecipeTargetRepository <a name="DataAwsccImagebuilderContainerRecipeTargetRepository" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepository()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderContainerRecipeComponentsList <a name="DataAwsccImagebuilderContainerRecipeComponentsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderContainerRecipeComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderContainerRecipeComponentsOutputReference <a name="DataAwsccImagebuilderContainerRecipeComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList">DataAwsccImagebuilderContainerRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponents">DataAwsccImagebuilderContainerRecipeComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.parameters"></a>

```python
parameters: DataAwsccImagebuilderContainerRecipeComponentsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList">DataAwsccImagebuilderContainerRecipeComponentsParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponents">DataAwsccImagebuilderContainerRecipeComponents</a>

---


### DataAwsccImagebuilderContainerRecipeComponentsParametersList <a name="DataAwsccImagebuilderContainerRecipeComponentsParametersList" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference <a name="DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParameters">DataAwsccImagebuilderContainerRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeComponentsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeComponentsParameters">DataAwsccImagebuilderContainerRecipeComponentsParameters</a>

---


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>

---


### DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfiguration">DataAwsccImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings"></a>

```python
block_device_mappings: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeInstanceConfiguration">DataAwsccImagebuilderContainerRecipeInstanceConfiguration</a>

---


### DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference <a name="DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersion">DataAwsccImagebuilderContainerRecipeLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.major"></a>

```python
major: str
```

- *Type:* str

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.minor"></a>

```python
minor: str
```

- *Type:* str

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.patch"></a>

```python
patch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeLatestVersion">DataAwsccImagebuilderContainerRecipeLatestVersion</a>

---


### DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_container_recipe

dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepository">DataAwsccImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderContainerRecipe.DataAwsccImagebuilderContainerRecipeTargetRepository">DataAwsccImagebuilderContainerRecipeTargetRepository</a>

---



