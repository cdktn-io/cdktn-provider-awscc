# `dataAwsccBedrockIntelligentPromptRouter` Submodule <a name="`dataAwsccBedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockIntelligentPromptRouter <a name="DataAwsccBedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_intelligent_prompt_router#id DataAwsccBedrockIntelligentPromptRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockIntelligentPromptRouter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel">fallback_model</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn">prompt_router_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName">prompt_router_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria">routing_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fallback_model`<sup>Required</sup> <a name="fallback_model" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel"></a>

```python
fallback_model: DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models"></a>

```python
models: DataAwsccBedrockIntelligentPromptRouterModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a>

---

##### `prompt_router_arn`<sup>Required</sup> <a name="prompt_router_arn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```python
prompt_router_arn: str
```

- *Type:* str

---

##### `prompt_router_name`<sup>Required</sup> <a name="prompt_router_name" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName"></a>

```python
prompt_router_name: str
```

- *Type:* str

---

##### `routing_criteria`<sup>Required</sup> <a name="routing_criteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria"></a>

```python
routing_criteria: DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags"></a>

```python
tags: DataAwsccBedrockIntelligentPromptRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockIntelligentPromptRouterConfig <a name="DataAwsccBedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_intelligent_prompt_router#id DataAwsccBedrockIntelligentPromptRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockIntelligentPromptRouterFallbackModel <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel()
```


### DataAwsccBedrockIntelligentPromptRouterModels <a name="DataAwsccBedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels()
```


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteria <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria()
```


### DataAwsccBedrockIntelligentPromptRouterTags <a name="DataAwsccBedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockIntelligentPromptRouterFallbackModel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a>

---


### DataAwsccBedrockIntelligentPromptRouterModelsList <a name="DataAwsccBedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockIntelligentPromptRouterModelsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockIntelligentPromptRouterModels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a>

---


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">response_quality_difference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_quality_difference`<sup>Required</sup> <a name="response_quality_difference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```python
response_quality_difference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a>

---


### DataAwsccBedrockIntelligentPromptRouterTagsList <a name="DataAwsccBedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockIntelligentPromptRouterTagsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_intelligent_prompt_router

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockIntelligentPromptRouterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a>

---



