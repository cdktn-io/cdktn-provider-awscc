# `dataAwsccMediaconnectFlowOutput` Submodule <a name="`dataAwsccMediaconnectFlowOutput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowOutput <a name="DataAwsccMediaconnectFlowOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow_output awscc_mediaconnect_flow_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow_output#id DataAwsccMediaconnectFlowOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowOutput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectFlowOutput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectFlowOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference">DataAwsccMediaconnectFlowOutputEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.mediaStreamOutputConfigurations">media_stream_output_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiOutputTimecodeSource">ndi_output_timecode_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiProgramName">ndi_program_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiSpeedHqQuality">ndi_speed_hq_quality</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputArn">output_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputStatus">output_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.remoteId">remote_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationState">router_integration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationTransitEncryption">router_integration_transit_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.smoothingLatency">smoothing_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList">DataAwsccMediaconnectFlowOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cidr_allow_list`<sup>Required</sup> <a name="cidr_allow_list" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cidrAllowList"></a>

```python
cidr_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.encryption"></a>

```python
encryption: DataAwsccMediaconnectFlowOutputEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference">DataAwsccMediaconnectFlowOutputEncryptionOutputReference</a>

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `max_latency`<sup>Required</sup> <a name="max_latency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_output_configurations`<sup>Required</sup> <a name="media_stream_output_configurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.mediaStreamOutputConfigurations"></a>

```python
media_stream_output_configurations: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList</a>

---

##### `min_latency`<sup>Required</sup> <a name="min_latency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ndi_output_timecode_source`<sup>Required</sup> <a name="ndi_output_timecode_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiOutputTimecodeSource"></a>

```python
ndi_output_timecode_source: str
```

- *Type:* str

---

##### `ndi_program_name`<sup>Required</sup> <a name="ndi_program_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiProgramName"></a>

```python
ndi_program_name: str
```

- *Type:* str

---

##### `ndi_speed_hq_quality`<sup>Required</sup> <a name="ndi_speed_hq_quality" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiSpeedHqQuality"></a>

```python
ndi_speed_hq_quality: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_arn`<sup>Required</sup> <a name="output_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputArn"></a>

```python
output_arn: str
```

- *Type:* str

---

##### `output_status`<sup>Required</sup> <a name="output_status" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputStatus"></a>

```python
output_status: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remote_id`<sup>Required</sup> <a name="remote_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.remoteId"></a>

```python
remote_id: str
```

- *Type:* str

---

##### `router_integration_state`<sup>Required</sup> <a name="router_integration_state" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationState"></a>

```python
router_integration_state: str
```

- *Type:* str

---

##### `router_integration_transit_encryption`<sup>Required</sup> <a name="router_integration_transit_encryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationTransitEncryption"></a>

```python
router_integration_transit_encryption: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a>

---

##### `smoothing_latency`<sup>Required</sup> <a name="smoothing_latency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.smoothingLatency"></a>

```python
smoothing_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tags"></a>

```python
tags: DataAwsccMediaconnectFlowOutputTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList">DataAwsccMediaconnectFlowOutputTagsList</a>

---

##### `vpc_interface_attachment`<sup>Required</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowOutputConfig <a name="DataAwsccMediaconnectFlowOutputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow_output#id DataAwsccMediaconnectFlowOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowOutputEncryption <a name="DataAwsccMediaconnectFlowOutputEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption()
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations()
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations()
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface()
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters()
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption()
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration()
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager()
```


### DataAwsccMediaconnectFlowOutputTags <a name="DataAwsccMediaconnectFlowOutputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags()
```


### DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment <a name="DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowOutputEncryptionOutputReference <a name="DataAwsccMediaconnectFlowOutputEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption">DataAwsccMediaconnectFlowOutputEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption">DataAwsccMediaconnectFlowOutputEncryption</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface"></a>

```python
interface: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor">compression_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile">encoder_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_factor`<sup>Required</sup> <a name="compression_factor" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor"></a>

```python
compression_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoder_profile`<sup>Required</sup> <a name="encoder_profile" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile"></a>

```python
encoder_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations">destination_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName">encoding_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters">encoding_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_configurations`<sup>Required</sup> <a name="destination_configurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations"></a>

```python
destination_configurations: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a>

---

##### `encoding_name`<sup>Required</sup> <a name="encoding_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName"></a>

```python
encoding_name: str
```

- *Type:* str

---

##### `encoding_parameters`<sup>Required</sup> <a name="encoding_parameters" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters"></a>

```python
encoding_parameters: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a>

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```python
secrets_manager: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key_configuration`<sup>Required</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryption_key_type`<sup>Required</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---


### DataAwsccMediaconnectFlowOutputTagsList <a name="DataAwsccMediaconnectFlowOutputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectFlowOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectFlowOutputTagsOutputReference <a name="DataAwsccMediaconnectFlowOutputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags">DataAwsccMediaconnectFlowOutputTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags">DataAwsccMediaconnectFlowOutputTags</a>

---


### DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_output

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment</a>

---



