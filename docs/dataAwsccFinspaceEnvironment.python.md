# `dataAwsccFinspaceEnvironment` Submodule <a name="`dataAwsccFinspaceEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFinspaceEnvironment <a name="DataAwsccFinspaceEnvironment" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/finspace_environment#id DataAwsccFinspaceEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccFinspaceEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccFinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles">data_bundles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId">dedicated_service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn">environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl">environment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode">federation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters">federation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl">sage_maker_studio_domain_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters">superuser_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `data_bundles`<sup>Required</sup> <a name="data_bundles" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles"></a>

```python
data_bundles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dedicated_service_account_id`<sup>Required</sup> <a name="dedicated_service_account_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```python
dedicated_service_account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_arn`<sup>Required</sup> <a name="environment_arn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn"></a>

```python
environment_arn: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_url`<sup>Required</sup> <a name="environment_url" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl"></a>

```python
environment_url: str
```

- *Type:* str

---

##### `federation_mode`<sup>Required</sup> <a name="federation_mode" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode"></a>

```python
federation_mode: str
```

- *Type:* str

---

##### `federation_parameters`<sup>Required</sup> <a name="federation_parameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters"></a>

```python
federation_parameters: DataAwsccFinspaceEnvironmentFederationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sage_maker_studio_domain_url`<sup>Required</sup> <a name="sage_maker_studio_domain_url" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```python
sage_maker_studio_domain_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `superuser_parameters`<sup>Required</sup> <a name="superuser_parameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters"></a>

```python
superuser_parameters: DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags"></a>

```python
tags: DataAwsccFinspaceEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFinspaceEnvironmentConfig <a name="DataAwsccFinspaceEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/finspace_environment#id DataAwsccFinspaceEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFinspaceEnvironmentFederationParameters <a name="DataAwsccFinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters()
```


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMap <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap()
```


### DataAwsccFinspaceEnvironmentSuperuserParameters <a name="DataAwsccFinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters()
```


### DataAwsccFinspaceEnvironmentTags <a name="DataAwsccFinspaceEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFinspaceEnvironmentFederationParametersAttributeMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a>

---


### DataAwsccFinspaceEnvironmentFederationParametersOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">application_call_back_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">attribute_map</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">federation_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">federation_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">saml_metadata_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">saml_metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_call_back_url`<sup>Required</sup> <a name="application_call_back_url" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```python
application_call_back_url: str
```

- *Type:* str

---

##### `attribute_map`<sup>Required</sup> <a name="attribute_map" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```python
attribute_map: DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `federation_provider_name`<sup>Required</sup> <a name="federation_provider_name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```python
federation_provider_name: str
```

- *Type:* str

---

##### `federation_urn`<sup>Required</sup> <a name="federation_urn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```python
federation_urn: str
```

- *Type:* str

---

##### `saml_metadata_document`<sup>Required</sup> <a name="saml_metadata_document" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```python
saml_metadata_document: str
```

- *Type:* str

---

##### `saml_metadata_url`<sup>Required</sup> <a name="saml_metadata_url" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```python
saml_metadata_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFinspaceEnvironmentFederationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a>

---


### DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference <a name="DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFinspaceEnvironmentSuperuserParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a>

---


### DataAwsccFinspaceEnvironmentTagsList <a name="DataAwsccFinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFinspaceEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFinspaceEnvironmentTagsOutputReference <a name="DataAwsccFinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_finspace_environment

dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFinspaceEnvironmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a>

---



