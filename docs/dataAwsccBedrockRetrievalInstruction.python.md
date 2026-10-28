# `dataAwsccBedrockRetrievalInstruction` Submodule <a name="`dataAwsccBedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockRetrievalInstruction <a name="DataAwsccBedrockRetrievalInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#id DataAwsccBedrockRetrievalInstruction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockRetrievalInstruction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus">last_transition_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId">retrieval_instruction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction"></a>

```python
instruction: DataAwsccBedrockRetrievalInstructionInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `last_transition_status`<sup>Required</sup> <a name="last_transition_status" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```python
last_transition_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retrieval_instruction_id`<sup>Required</sup> <a name="retrieval_instruction_id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```python
retrieval_instruction_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags"></a>

```python
tags: DataAwsccBedrockRetrievalInstructionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockRetrievalInstructionConfig <a name="DataAwsccBedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#id DataAwsccBedrockRetrievalInstruction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockRetrievalInstructionInstruction <a name="DataAwsccBedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction()
```


### DataAwsccBedrockRetrievalInstructionTags <a name="DataAwsccBedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockRetrievalInstructionInstructionOutputReference <a name="DataAwsccBedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">answer_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">answer_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">retrieval_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `answer_format`<sup>Required</sup> <a name="answer_format" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```python
answer_format: str
```

- *Type:* str

---

##### `answer_policy`<sup>Required</sup> <a name="answer_policy" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```python
answer_policy: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `retrieval_guidance`<sup>Required</sup> <a name="retrieval_guidance" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```python
retrieval_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockRetrievalInstructionInstruction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a>

---


### DataAwsccBedrockRetrievalInstructionTagsList <a name="DataAwsccBedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockRetrievalInstructionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockRetrievalInstructionTagsOutputReference <a name="DataAwsccBedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_retrieval_instruction

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockRetrievalInstructionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a>

---



