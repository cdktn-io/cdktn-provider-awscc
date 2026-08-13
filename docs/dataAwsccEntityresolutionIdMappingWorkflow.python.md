# `dataAwsccEntityresolutionIdMappingWorkflow` Submodule <a name="`dataAwsccEntityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionIdMappingWorkflow <a name="DataAwsccEntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow#id DataAwsccEntityresolutionIdMappingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEntityresolutionIdMappingWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">id_mapping_incremental_run_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques">id_mapping_techniques</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig">input_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig">output_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id_mapping_incremental_run_config`<sup>Required</sup> <a name="id_mapping_incremental_run_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```python
id_mapping_incremental_run_config: DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `id_mapping_techniques`<sup>Required</sup> <a name="id_mapping_techniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```python
id_mapping_techniques: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```python
input_source_config: DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `output_source_config`<sup>Required</sup> <a name="output_source_config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```python
output_source_config: DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags"></a>

```python
tags: DataAwsccEntityresolutionIdMappingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionIdMappingWorkflowConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow#id DataAwsccEntityresolutionIdMappingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig()
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques()
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties()
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration()
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties()
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules()
```


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig()
```


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig()
```


### DataAwsccEntityresolutionIdMappingWorkflowTags <a name="DataAwsccEntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">incremental_run_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incremental_run_type`<sup>Required</sup> <a name="incremental_run_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```python
incremental_run_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">id_mapping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">normalization_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_mapping_type`<sup>Required</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```python
id_mapping_type: str
```

- *Type:* str

---

##### `normalization_version`<sup>Required</sup> <a name="normalization_version" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```python
normalization_version: str
```

- *Type:* str

---

##### `provider_properties`<sup>Required</sup> <a name="provider_properties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```python
provider_properties: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `rule_based_properties`<sup>Required</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```python
rule_based_properties: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediate_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_s3_path`<sup>Required</sup> <a name="intermediate_s3_path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```python
intermediate_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediate_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">provider_configuration</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_source_configuration`<sup>Required</sup> <a name="intermediate_source_configuration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```python
intermediate_source_configuration: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `provider_configuration`<sup>Required</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```python
provider_configuration: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provider_service_arn`<sup>Required</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">record_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">rule_definition_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

---

##### `record_matching_model`<sup>Required</sup> <a name="record_matching_model" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```python
record_matching_model: str
```

- *Type:* str

---

##### `rule_definition_type`<sup>Required</sup> <a name="rule_definition_type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```python
rule_definition_type: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```python
rules: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_keys`<sup>Required</sup> <a name="matching_keys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_source_arn`<sup>Required</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">output_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `output_s3_path`<sup>Required</sup> <a name="output_s3_path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```python
output_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsList <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_entityresolution_id_mapping_workflow

dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEntityresolutionIdMappingWorkflowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a>

---



