# `dataAwsccBedrockPrompt` Submodule <a name="`dataAwsccBedrockPrompt` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockPrompt <a name="DataAwsccBedrockPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPrompt(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#id DataAwsccBedrockPrompt#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockPrompt to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant">default_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId">prompt_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `default_variant`<sup>Required</sup> <a name="default_variant" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant"></a>

```python
default_variant: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompt_id`<sup>Required</sup> <a name="prompt_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId"></a>

```python
prompt_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants"></a>

```python
variants: DataAwsccBedrockPromptVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockPromptConfig <a name="DataAwsccBedrockPromptConfig" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#id DataAwsccBedrockPrompt#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockPromptVariants <a name="DataAwsccBedrockPromptVariants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants()
```


### DataAwsccBedrockPromptVariantsGenAiResource <a name="DataAwsccBedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource()
```


### DataAwsccBedrockPromptVariantsGenAiResourceAgent <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent()
```


### DataAwsccBedrockPromptVariantsInferenceConfiguration <a name="DataAwsccBedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration()
```


### DataAwsccBedrockPromptVariantsInferenceConfigurationText <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText()
```


### DataAwsccBedrockPromptVariantsMetadata <a name="DataAwsccBedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata()
```


### DataAwsccBedrockPromptVariantsTemplateConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChat <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationText <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables()
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agent_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_identifier`<sup>Required</sup> <a name="agent_identifier" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```python
agent_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a>

---


### DataAwsccBedrockPromptVariantsGenAiResourceOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```python
agent: DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```python
text: DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsList <a name="DataAwsccBedrockPromptVariantsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsMetadataList <a name="DataAwsccBedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsMetadataOutputReference <a name="DataAwsccBedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a>

---


### DataAwsccBedrockPromptVariantsOutputReference <a name="DataAwsccBedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource">gen_ai_resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_model_request_fields`<sup>Required</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

---

##### `gen_ai_resource`<sup>Required</sup> <a name="gen_ai_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource"></a>

```python
gen_ai_resource: DataAwsccBedrockPromptVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata"></a>

```python
metadata: DataAwsccBedrockPromptVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a>

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```python
template_configuration: DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```python
content: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">system_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">tool_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```python
input_variables: DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```python
messages: DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```python
system_attribute: DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `tool_configuration`<sup>Required</sup> <a name="tool_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```python
tool_configuration: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">tool_choice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_choice`<sup>Required</sup> <a name="tool_choice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```python
tool_choice: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```python
tools: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```python
any: str
```

- *Type:* str

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```python
auto: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```python
tool: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">tool_spec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `tool_spec`<sup>Required</sup> <a name="tool_spec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```python
tool_spec: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">input_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```python
input_schema: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```python
chat: DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```python
text: DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">text_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```python
input_variables: DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_s3_location`<sup>Required</sup> <a name="text_s3_location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```python
text_s3_location: DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt

dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



