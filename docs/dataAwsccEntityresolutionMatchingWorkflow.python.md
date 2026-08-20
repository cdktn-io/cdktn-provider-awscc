# `dataAwsccEntityresolutionMatchingWorkflow` Submodule <a name="`dataAwsccEntityresolutionMatchingWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionMatchingWorkflow <a name="DataAwsccEntityresolutionMatchingWorkflow" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_matching_workflow#id DataAwsccEntityresolutionMatchingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEntityresolutionMatchingWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEntityresolutionMatchingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionMatchingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.incrementalRunConfig">incremental_run_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.inputSourceConfig">input_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.outputSourceConfig">output_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.resolutionTechniques">resolution_techniques</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList">DataAwsccEntityresolutionMatchingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `incremental_run_config`<sup>Required</sup> <a name="incremental_run_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.incrementalRunConfig"></a>

```python
incremental_run_config: DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a>

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.inputSourceConfig"></a>

```python
input_source_config: DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList</a>

---

##### `output_source_config`<sup>Required</sup> <a name="output_source_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.outputSourceConfig"></a>

```python
output_source_config: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList</a>

---

##### `resolution_techniques`<sup>Required</sup> <a name="resolution_techniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.resolutionTechniques"></a>

```python
resolution_techniques: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tags"></a>

```python
tags: DataAwsccEntityresolutionMatchingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList">DataAwsccEntityresolutionMatchingWorkflowTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionMatchingWorkflowConfig <a name="DataAwsccEntityresolutionMatchingWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_matching_workflow#id DataAwsccEntityresolutionMatchingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig <a name="DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig()
```


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig()
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig()
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig()
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig()
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules()
```


### DataAwsccEntityresolutionMatchingWorkflowTags <a name="DataAwsccEntityresolutionMatchingWorkflowTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType">incremental_run_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incremental_run_type`<sup>Required</sup> <a name="incremental_run_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```python
incremental_run_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization">apply_normalization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_normalization`<sup>Required</sup> <a name="apply_normalization" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization"></a>

```python
apply_normalization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `input_source_arn`<sup>Required</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn">domain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn">object_type_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_arn`<sup>Required</sup> <a name="domain_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn"></a>

```python
domain_arn: str
```

- *Type:* str

---

##### `object_type_arn`<sup>Required</sup> <a name="object_type_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn"></a>

```python
object_type_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed">hashed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed"></a>

```python
hashed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization">apply_normalization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig">customer_profiles_integration_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">output_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_normalization`<sup>Required</sup> <a name="apply_normalization" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization"></a>

```python
apply_normalization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `customer_profiles_integration_config`<sup>Required</sup> <a name="customer_profiles_integration_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig"></a>

```python
customer_profiles_integration_config: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a>

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output"></a>

```python
output: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a>

---

##### `output_s3_path`<sup>Required</sup> <a name="output_s3_path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```python
output_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching">enable_real_time_matching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType">resolution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties">rule_condition_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_real_time_matching`<sup>Required</sup> <a name="enable_real_time_matching" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching"></a>

```python
enable_real_time_matching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `provider_properties`<sup>Required</sup> <a name="provider_properties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties"></a>

```python
provider_properties: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a>

---

##### `resolution_type`<sup>Required</sup> <a name="resolution_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType"></a>

```python
resolution_type: str
```

- *Type:* str

---

##### `rule_based_properties`<sup>Required</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties"></a>

```python
rule_based_properties: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `rule_condition_properties`<sup>Required</sup> <a name="rule_condition_properties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties"></a>

```python
rule_condition_properties: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediate_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_s3_path`<sup>Required</sup> <a name="intermediate_s3_path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```python
intermediate_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediate_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration">provider_configuration</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_source_configuration`<sup>Required</sup> <a name="intermediate_source_configuration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```python
intermediate_source_configuration: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `provider_configuration`<sup>Required</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```python
provider_configuration: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provider_service_arn`<sup>Required</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose">match_purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

---

##### `match_purpose`<sup>Required</sup> <a name="match_purpose" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose"></a>

```python
match_purpose: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```python
rules: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_keys`<sup>Required</sup> <a name="matching_keys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching">enable_transitive_matching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_transitive_matching`<sup>Required</sup> <a name="enable_transitive_matching" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching"></a>

```python
enable_transitive_matching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig">matching_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_config`<sup>Required</sup> <a name="matching_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig"></a>

```python
matching_config: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules"></a>

```python
rules: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>

---


### DataAwsccEntityresolutionMatchingWorkflowTagsList <a name="DataAwsccEntityresolutionMatchingWorkflowTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_matching_workflow

dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags">DataAwsccEntityresolutionMatchingWorkflowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionMatchingWorkflowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags">DataAwsccEntityresolutionMatchingWorkflowTags</a>

---



