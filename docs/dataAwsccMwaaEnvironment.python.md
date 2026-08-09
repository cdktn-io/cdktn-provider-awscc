# `dataAwsccMwaaEnvironment` Submodule <a name="`dataAwsccMwaaEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMwaaEnvironment <a name="DataAwsccMwaaEnvironment" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment awscc_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMwaaEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMwaaEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMwaaEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions">airflow_configuration_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion">airflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue">celery_executor_queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path">dag_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService">database_vpc_endpoint_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement">endpoint_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass">environment_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers">max_webservers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers">min_webservers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion">plugins_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path">plugins_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion">requirements_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path">requirements_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers">schedulers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn">source_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion">startup_script_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path">startup_script_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode">webserver_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl">webserver_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService">webserver_vpc_endpoint_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy">worker_replacement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `airflow_configuration_options`<sup>Required</sup> <a name="airflow_configuration_options" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions"></a>

```python
airflow_configuration_options: str
```

- *Type:* str

---

##### `airflow_version`<sup>Required</sup> <a name="airflow_version" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion"></a>

```python
airflow_version: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `celery_executor_queue`<sup>Required</sup> <a name="celery_executor_queue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue"></a>

```python
celery_executor_queue: str
```

- *Type:* str

---

##### `dag_s3_path`<sup>Required</sup> <a name="dag_s3_path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path"></a>

```python
dag_s3_path: str
```

- *Type:* str

---

##### `database_vpc_endpoint_service`<sup>Required</sup> <a name="database_vpc_endpoint_service" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService"></a>

```python
database_vpc_endpoint_service: str
```

- *Type:* str

---

##### `endpoint_management`<sup>Required</sup> <a name="endpoint_management" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement"></a>

```python
endpoint_management: str
```

- *Type:* str

---

##### `environment_class`<sup>Required</sup> <a name="environment_class" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass"></a>

```python
environment_class: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration"></a>

```python
logging_configuration: DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `max_webservers`<sup>Required</sup> <a name="max_webservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers"></a>

```python
max_webservers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_webservers`<sup>Required</sup> <a name="min_webservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers"></a>

```python
min_webservers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers`<sup>Required</sup> <a name="min_workers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `plugins_s3_object_version`<sup>Required</sup> <a name="plugins_s3_object_version" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```python
plugins_s3_object_version: str
```

- *Type:* str

---

##### `plugins_s3_path`<sup>Required</sup> <a name="plugins_s3_path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path"></a>

```python
plugins_s3_path: str
```

- *Type:* str

---

##### `requirements_s3_object_version`<sup>Required</sup> <a name="requirements_s3_object_version" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```python
requirements_s3_object_version: str
```

- *Type:* str

---

##### `requirements_s3_path`<sup>Required</sup> <a name="requirements_s3_path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path"></a>

```python
requirements_s3_path: str
```

- *Type:* str

---

##### `schedulers`<sup>Required</sup> <a name="schedulers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers"></a>

```python
schedulers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_bucket_arn`<sup>Required</sup> <a name="source_bucket_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn"></a>

```python
source_bucket_arn: str
```

- *Type:* str

---

##### `startup_script_s3_object_version`<sup>Required</sup> <a name="startup_script_s3_object_version" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion"></a>

```python
startup_script_s3_object_version: str
```

- *Type:* str

---

##### `startup_script_s3_path`<sup>Required</sup> <a name="startup_script_s3_path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path"></a>

```python
startup_script_s3_path: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `webserver_access_mode`<sup>Required</sup> <a name="webserver_access_mode" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode"></a>

```python
webserver_access_mode: str
```

- *Type:* str

---

##### `webserver_url`<sup>Required</sup> <a name="webserver_url" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl"></a>

```python
webserver_url: str
```

- *Type:* str

---

##### `webserver_vpc_endpoint_service`<sup>Required</sup> <a name="webserver_vpc_endpoint_service" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService"></a>

```python
webserver_vpc_endpoint_service: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start`<sup>Required</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

---

##### `worker_replacement_strategy`<sup>Required</sup> <a name="worker_replacement_strategy" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy"></a>

```python
worker_replacement_strategy: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMwaaEnvironmentConfig <a name="DataAwsccMwaaEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMwaaEnvironmentLoggingConfiguration <a name="DataAwsccMwaaEnvironmentLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration()
```


### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs()
```


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs()
```


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs()
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs()
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs()
```


### DataAwsccMwaaEnvironmentNetworkConfiguration <a name="DataAwsccMwaaEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">dag_processing_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">scheduler_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">task_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">webserver_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">worker_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dag_processing_logs`<sup>Required</sup> <a name="dag_processing_logs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```python
dag_processing_logs: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `scheduler_logs`<sup>Required</sup> <a name="scheduler_logs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```python
scheduler_logs: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `task_logs`<sup>Required</sup> <a name="task_logs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```python
task_logs: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `webserver_logs`<sup>Required</sup> <a name="webserver_logs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```python
webserver_logs: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `worker_logs`<sup>Required</sup> <a name="worker_logs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```python
worker_logs: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaa_environment

dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a>

---



